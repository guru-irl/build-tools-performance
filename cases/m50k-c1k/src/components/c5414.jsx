import React from 'react';
const LABEL_5414 = 'component_5414';
export function Component5414({ value = 5414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5414, 'data-value': derived.doubled }, children);
}
export default Component5414;
