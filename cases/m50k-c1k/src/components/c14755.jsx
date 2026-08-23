import React from 'react';
const LABEL_14755 = 'component_14755';
export function Component14755({ value = 14755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14755, 'data-value': derived.doubled }, children);
}
export default Component14755;
