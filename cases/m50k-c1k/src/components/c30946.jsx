import React from 'react';
const LABEL_30946 = 'component_30946';
export function Component30946({ value = 30946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30946, 'data-value': derived.doubled }, children);
}
export default Component30946;
