import React from 'react';
const LABEL_28832 = 'component_28832';
export function Component28832({ value = 28832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28832, 'data-value': derived.doubled }, children);
}
export default Component28832;
