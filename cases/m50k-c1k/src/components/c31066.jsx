import React from 'react';
const LABEL_31066 = 'component_31066';
export function Component31066({ value = 31066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31066, 'data-value': derived.doubled }, children);
}
export default Component31066;
