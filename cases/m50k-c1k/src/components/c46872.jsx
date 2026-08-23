import React from 'react';
const LABEL_46872 = 'component_46872';
export function Component46872({ value = 46872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46872, 'data-value': derived.doubled }, children);
}
export default Component46872;
