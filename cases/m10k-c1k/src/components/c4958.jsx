import React from 'react';
const LABEL_4958 = 'component_4958';
export function Component4958({ value = 4958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4958, 'data-value': derived.doubled }, children);
}
export default Component4958;
