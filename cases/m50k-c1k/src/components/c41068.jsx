import React from 'react';
const LABEL_41068 = 'component_41068';
export function Component41068({ value = 41068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41068, 'data-value': derived.doubled }, children);
}
export default Component41068;
