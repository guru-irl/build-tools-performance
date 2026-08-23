import React from 'react';
const LABEL_4975 = 'component_4975';
export function Component4975({ value = 4975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4975, 'data-value': derived.doubled }, children);
}
export default Component4975;
