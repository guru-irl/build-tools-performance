import React from 'react';
const LABEL_19935 = 'component_19935';
export function Component19935({ value = 19935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19935, 'data-value': derived.doubled }, children);
}
export default Component19935;
