import React from 'react';
const LABEL_8898 = 'component_8898';
export function Component8898({ value = 8898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8898, 'data-value': derived.doubled }, children);
}
export default Component8898;
