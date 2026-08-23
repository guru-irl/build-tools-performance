import React from 'react';
const LABEL_46748 = 'component_46748';
export function Component46748({ value = 46748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46748, 'data-value': derived.doubled }, children);
}
export default Component46748;
