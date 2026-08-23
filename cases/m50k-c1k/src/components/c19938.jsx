import React from 'react';
const LABEL_19938 = 'component_19938';
export function Component19938({ value = 19938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19938, 'data-value': derived.doubled }, children);
}
export default Component19938;
