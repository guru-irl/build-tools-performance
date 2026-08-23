import React from 'react';
const LABEL_4788 = 'component_4788';
export function Component4788({ value = 4788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4788, 'data-value': derived.doubled }, children);
}
export default Component4788;
