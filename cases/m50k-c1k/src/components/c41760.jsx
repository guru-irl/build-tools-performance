import React from 'react';
const LABEL_41760 = 'component_41760';
export function Component41760({ value = 41760, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41760, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41760, 'data-value': derived.doubled }, children);
}
export default Component41760;
