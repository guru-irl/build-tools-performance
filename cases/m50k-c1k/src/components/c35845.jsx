import React from 'react';
const LABEL_35845 = 'component_35845';
export function Component35845({ value = 35845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35845, 'data-value': derived.doubled }, children);
}
export default Component35845;
