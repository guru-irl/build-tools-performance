import React from 'react';
const LABEL_40773 = 'component_40773';
export function Component40773({ value = 40773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40773, 'data-value': derived.doubled }, children);
}
export default Component40773;
