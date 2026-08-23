import React from 'react';
const LABEL_30996 = 'component_30996';
export function Component30996({ value = 30996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30996, 'data-value': derived.doubled }, children);
}
export default Component30996;
