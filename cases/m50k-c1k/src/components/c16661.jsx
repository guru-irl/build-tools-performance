import React from 'react';
const LABEL_16661 = 'component_16661';
export function Component16661({ value = 16661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16661, 'data-value': derived.doubled }, children);
}
export default Component16661;
