import React from 'react';
const LABEL_30320 = 'component_30320';
export function Component30320({ value = 30320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30320, 'data-value': derived.doubled }, children);
}
export default Component30320;
