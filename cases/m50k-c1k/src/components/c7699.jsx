import React from 'react';
const LABEL_7699 = 'component_7699';
export function Component7699({ value = 7699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7699, 'data-value': derived.doubled }, children);
}
export default Component7699;
