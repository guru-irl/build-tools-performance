import React from 'react';
const LABEL_32555 = 'component_32555';
export function Component32555({ value = 32555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32555, 'data-value': derived.doubled }, children);
}
export default Component32555;
