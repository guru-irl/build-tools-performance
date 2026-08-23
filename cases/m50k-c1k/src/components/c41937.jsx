import React from 'react';
const LABEL_41937 = 'component_41937';
export function Component41937({ value = 41937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41937, 'data-value': derived.doubled }, children);
}
export default Component41937;
