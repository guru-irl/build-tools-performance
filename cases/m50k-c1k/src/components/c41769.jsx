import React from 'react';
const LABEL_41769 = 'component_41769';
export function Component41769({ value = 41769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41769, 'data-value': derived.doubled }, children);
}
export default Component41769;
