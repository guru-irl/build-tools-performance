import React from 'react';
const LABEL_18555 = 'component_18555';
export function Component18555({ value = 18555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18555, 'data-value': derived.doubled }, children);
}
export default Component18555;
