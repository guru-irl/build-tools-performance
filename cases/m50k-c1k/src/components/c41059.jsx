import React from 'react';
const LABEL_41059 = 'component_41059';
export function Component41059({ value = 41059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41059, 'data-value': derived.doubled }, children);
}
export default Component41059;
