import React from 'react';
const LABEL_26894 = 'component_26894';
export function Component26894({ value = 26894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26894, 'data-value': derived.doubled }, children);
}
export default Component26894;
