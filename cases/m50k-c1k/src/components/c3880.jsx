import React from 'react';
const LABEL_3880 = 'component_3880';
export function Component3880({ value = 3880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3880, 'data-value': derived.doubled }, children);
}
export default Component3880;
