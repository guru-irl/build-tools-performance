import React from 'react';
const LABEL_37426 = 'component_37426';
export function Component37426({ value = 37426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37426, 'data-value': derived.doubled }, children);
}
export default Component37426;
