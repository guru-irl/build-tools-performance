import React from 'react';
const LABEL_34555 = 'component_34555';
export function Component34555({ value = 34555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34555, 'data-value': derived.doubled }, children);
}
export default Component34555;
