import React from 'react';
const LABEL_46347 = 'component_46347';
export function Component46347({ value = 46347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46347, 'data-value': derived.doubled }, children);
}
export default Component46347;
