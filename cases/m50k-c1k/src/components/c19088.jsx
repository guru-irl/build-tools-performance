import React from 'react';
const LABEL_19088 = 'component_19088';
export function Component19088({ value = 19088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19088, 'data-value': derived.doubled }, children);
}
export default Component19088;
