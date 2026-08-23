import React from 'react';
const LABEL_41101 = 'component_41101';
export function Component41101({ value = 41101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41101, 'data-value': derived.doubled }, children);
}
export default Component41101;
