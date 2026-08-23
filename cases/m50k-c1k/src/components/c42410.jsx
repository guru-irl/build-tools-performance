import React from 'react';
const LABEL_42410 = 'component_42410';
export function Component42410({ value = 42410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42410, 'data-value': derived.doubled }, children);
}
export default Component42410;
