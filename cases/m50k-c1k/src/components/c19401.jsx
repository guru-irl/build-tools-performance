import React from 'react';
const LABEL_19401 = 'component_19401';
export function Component19401({ value = 19401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19401, 'data-value': derived.doubled }, children);
}
export default Component19401;
