import React from 'react';
const LABEL_41783 = 'component_41783';
export function Component41783({ value = 41783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41783, 'data-value': derived.doubled }, children);
}
export default Component41783;
