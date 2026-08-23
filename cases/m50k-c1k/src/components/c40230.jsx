import React from 'react';
const LABEL_40230 = 'component_40230';
export function Component40230({ value = 40230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40230, 'data-value': derived.doubled }, children);
}
export default Component40230;
