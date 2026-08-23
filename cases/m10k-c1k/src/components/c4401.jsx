import React from 'react';
const LABEL_4401 = 'component_4401';
export function Component4401({ value = 4401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4401, 'data-value': derived.doubled }, children);
}
export default Component4401;
