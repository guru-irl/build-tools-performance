import React from 'react';
const LABEL_18010 = 'component_18010';
export function Component18010({ value = 18010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18010, 'data-value': derived.doubled }, children);
}
export default Component18010;
