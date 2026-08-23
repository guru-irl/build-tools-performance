import React from 'react';
const LABEL_41423 = 'component_41423';
export function Component41423({ value = 41423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41423, 'data-value': derived.doubled }, children);
}
export default Component41423;
