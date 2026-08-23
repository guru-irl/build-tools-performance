import React from 'react';
const LABEL_30221 = 'component_30221';
export function Component30221({ value = 30221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30221, 'data-value': derived.doubled }, children);
}
export default Component30221;
