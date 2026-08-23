import React from 'react';
const LABEL_4051 = 'component_4051';
export function Component4051({ value = 4051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4051, 'data-value': derived.doubled }, children);
}
export default Component4051;
