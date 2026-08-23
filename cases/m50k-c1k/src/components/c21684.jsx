import React from 'react';
const LABEL_21684 = 'component_21684';
export function Component21684({ value = 21684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21684, 'data-value': derived.doubled }, children);
}
export default Component21684;
