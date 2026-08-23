import React from 'react';
const LABEL_2942 = 'component_2942';
export function Component2942({ value = 2942, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2942, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2942, 'data-value': derived.doubled }, children);
}
export default Component2942;
