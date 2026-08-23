import React from 'react';
const LABEL_46565 = 'component_46565';
export function Component46565({ value = 46565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46565, 'data-value': derived.doubled }, children);
}
export default Component46565;
