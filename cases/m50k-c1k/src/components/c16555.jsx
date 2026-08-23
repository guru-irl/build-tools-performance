import React from 'react';
const LABEL_16555 = 'component_16555';
export function Component16555({ value = 16555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16555, 'data-value': derived.doubled }, children);
}
export default Component16555;
