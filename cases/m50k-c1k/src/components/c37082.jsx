import React from 'react';
const LABEL_37082 = 'component_37082';
export function Component37082({ value = 37082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37082, 'data-value': derived.doubled }, children);
}
export default Component37082;
