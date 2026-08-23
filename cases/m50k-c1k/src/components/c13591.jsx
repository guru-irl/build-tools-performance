import React from 'react';
const LABEL_13591 = 'component_13591';
export function Component13591({ value = 13591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13591, 'data-value': derived.doubled }, children);
}
export default Component13591;
