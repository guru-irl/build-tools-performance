import React from 'react';
const LABEL_40684 = 'component_40684';
export function Component40684({ value = 40684, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40684, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40684, 'data-value': derived.doubled }, children);
}
export default Component40684;
