import React from 'react';
const LABEL_5066 = 'component_5066';
export function Component5066({ value = 5066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5066, 'data-value': derived.doubled }, children);
}
export default Component5066;
