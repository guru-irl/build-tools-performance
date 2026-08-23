import React from 'react';
const LABEL_41547 = 'component_41547';
export function Component41547({ value = 41547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41547, 'data-value': derived.doubled }, children);
}
export default Component41547;
