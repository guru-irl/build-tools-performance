import React from 'react';
const LABEL_19567 = 'component_19567';
export function Component19567({ value = 19567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19567, 'data-value': derived.doubled }, children);
}
export default Component19567;
