import React from 'react';
const LABEL_41456 = 'component_41456';
export function Component41456({ value = 41456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41456, 'data-value': derived.doubled }, children);
}
export default Component41456;
