import React from 'react';
const LABEL_40898 = 'component_40898';
export function Component40898({ value = 40898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40898, 'data-value': derived.doubled }, children);
}
export default Component40898;
