import React from 'react';
const LABEL_20618 = 'component_20618';
export function Component20618({ value = 20618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20618, 'data-value': derived.doubled }, children);
}
export default Component20618;
