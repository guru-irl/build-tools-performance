import React from 'react';
const LABEL_20591 = 'component_20591';
export function Component20591({ value = 20591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20591, 'data-value': derived.doubled }, children);
}
export default Component20591;
