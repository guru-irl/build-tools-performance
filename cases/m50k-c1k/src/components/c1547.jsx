import React from 'react';
const LABEL_1547 = 'component_1547';
export function Component1547({ value = 1547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1547, 'data-value': derived.doubled }, children);
}
export default Component1547;
